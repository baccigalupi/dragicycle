Dragicycle
========
Unicycle is a sandbox server for playing with wheel.js ... and you can deploy it to Heroku! This example plays with drag in Wheel.js


Playing on Your Own
-------------------
Unicycle runs on a simple node.js[node.js](http://nodejs.org/) static server called buffet. You will need node.js to get started: [http://nodejs.org/](http://nodejs.org/).

Next you will need to install [npm, the node package manager](https://npmjs.org/).

Next clone the application:

    `git clone git@github.com:baccigalupi/unicycle.git`

Once you have a local copy of unicyle, cd into its directory, and we
will have to do a littel more stuff.

Unicycle has it's dependencies declared in a `package.json` file. The
modules are prepackaged in `/node_modules`, but feel free to rebuild
them for your local environment.

    `npm install`

The last thing you will need is the `foreman` gem. This is something that
comes with the [Heroku Toolbelt](https://toolbelt.heroku.com/).

Running the Server
------------------
The best way to run the server is with the `foreman` gem:

    `foreman start`

That's it! You will have a static http server running and the message in
console will tell you exactly which port to find it on.
