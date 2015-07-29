'use strict';

var gitRefs = require( '@sinet/git-refs' );
var os      = require( 'os' );
var path    = require( 'path' );

var Status = function () {
	this.commit   = '';
	this.uptime   = process.uptime();
	this.hostname = os.hostname();
	this.totalmem = os.totalmem();
	this.freemem  = os.freemem();
	this.loadavg  = os.loadavg();

	var self = this;

	gitRefs( path.join( process.cwd(), '.git' ), function ( error, refs ) {
		if ( error ) {
			self.commit = 'undetermined';
			return console.log( error );
		}

		self.commit = refs.current.head;
	} );
};

Status.prototype.update = function () {
	this.freemem = os.freemem();
	this.loadavg = os.loadavg();
	this.uptime  = process.uptime();
};

module.exports = Status;
