'use strict';

/* eslint no-unused-expressions:0 */

const assert = require( 'assert' );

require( 'should' );

describe( 'container status', function () {
	let result, uptime;

	before( function ( done ) {
		let Status = require( '../' );

		result = new Status();
		uptime = result.uptime;
		done();
	} );

	it( 'should create a status object', function () {
		Object.keys( result ).length.should.equal( 6 );
		result.should.have.property( 'commit' ).with.lengthOf( 40 ).and.be.a.String;
		result.should.have.property( 'uptime' ).and.be.a.Number;
		result.should.have.property( 'hostname' ).and.be.a.String;
		result.should.have.property( 'totalmem' ).and.be.a.Number;
		result.should.have.property( 'freemem' ).and.be.a.Number;
		result.should.have.property( 'loadavg' ).and.be.an.Array;

		// Make sure that uptimes were equal at one time
		result.uptime.should.equal( uptime );
	} );

	describe( 'status.update()', function () {
		before( function ( done ) {
			// Force it to wait to update the time
			setTimeout( function () {
				result.update();
				done();
			}, 20 );
		} );

		it( 'should modify the uptime', function () {
			result.uptime.should.not.equal( uptime );
			// Object.keys( result ).length.should.equal( 6 );
			// result.should.have.property( 'commit' ).and.be.a.String.with.lengthOf( 40 );
			// result.should.have.property( 'uptime' ).and.be.a.Number;
			// result.should.have.property( 'hostname' ).and.be.a.String;
			// result.should.have.property( 'totalmem' ).and.be.a.Number;
			// result.should.have.property( 'freemem' ).and.be.a.Number;
			result.should.have.property( 'loadavg' ).and.be.an.Array;
		} );
	} );
} );

describe( 'without `.git` folder', function () {
	let result, originalCWD;

	before( function ( done ) {
		let Status = require( '../' );

		// Backup process.cwd so we can restore after
		originalCWD = process.cwd;

		// Change process.cwd, so that it returns a folder without a .git folder
		process.cwd = function () {
			return 'invalid-folder';
		};

		result = new Status();
		done();
	} );

	after( function ( done ) {
		process.cwd = originalCWD;
		done();
	} );

	it( 'should have no commit in status object', function () {
		Object.keys( result ).length.should.equal( 6 );
		assert.strictEqual( result.commit, null );
		result.should.have.property( 'commit' );
		result.should.have.property( 'uptime' ).and.be.a.Number;
		result.should.have.property( 'hostname' ).and.be.a.String;
		result.should.have.property( 'totalmem' ).and.be.a.Number;
		result.should.have.property( 'freemem' ).and.be.a.Number;
		result.should.have.property( 'loadavg' ).and.be.an.Array;
	} );
} );
