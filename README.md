# Container Status
[![Build Status][ci-badge]][ci-badge-link]
[![Dependency Status][david-badge]][david-badge-link]
[![devDependency Status][david-dev-badge]][david-dev-badge-link]

A simple package to determine the status of a container. It provides the following type of data:

```javascript
{
	'commit'   : 'a208c3b11a89b89eb1018f37d37c22a725024b46',
	'uptime'   : 103.558,
	'hostname' : 'hostname',
	'totalmem' : 17179869184,
	'freemem'  : 225099776,
	'loadavg'  : [ 2.40087890625, 2.50927734375, 2.65625 ]
}
```

## Usage

```bash
npm install @sinet/container-status --save
```

### Example
```javascript
var Status = require( '@sinet/container-status' );
var status = new Status();

console.log( "status:", status );

setTimeout(function () {
	console.log( "status:", status );
}, 2000);

```

## Contributing
All pull requests must follow [coding conventions and standards](https://github.com/School-Improvement-Network/coding-conventions).

[david-badge]: https://david-dm.org/School-Improvement-Network/container-status.svg
[david-badge-link]: https://david-dm.org/School-Improvement-Network/container-status
[david-dev-badge]: https://david-dm.org/School-Improvement-Network/container-status/dev-status.svg
[david-dev-badge-link]: https://david-dm.org/School-Improvement-Network/container-status
[david-dev-badge-link]: https://david-dm.org/School-Improvement-Network/container-status#info=devDependencies
[ci-badge]: https://circleci.com/gh/School-Improvement-Network/container-status.svg?style=shield
[ci-badge-link]: https://circleci.com/gh/School-Improvement-Network/container-status
