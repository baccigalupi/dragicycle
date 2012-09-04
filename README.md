Unicycle
========
Unicycle is a sandbox server for playing with wheel.js ... and you can deploy it to Heroku!


Installation
------------
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

Cloning the repository will maintain its `.git` folder, linking it to
the original unicycle repository on github. If you want to commit it to
anywhere else, it would be good to just blow away this directory:

    `rm -r .git`

Unicycle comes with its own version of wheel.js. It was built at the
time that Unicycle was created, and is likely not the latest and
greatest. To get the latest version of
[wheel.js](http://github.com/baccigalupi/wheel.js), run a simple `jake` task:

    `jake wheel`

That will automatically put the latest code in the right files in the
`/site` directory.

The last thing you will need is the `foreman` gem. This is something that
comes with the [Heroku Toolbelt](https://toolbelt.heroku.com/).

Running the Server
------------------
The best way to run the server is with the `foreman` gem:

    `foreman start`

That's it! You will have a static http server running and the message in
console will tell you exactly which port to find it on.

Playing on the Wheel
--------------------
The `/site` directory has everything that you need to deliver an html
page with wheel. The files that you should work on are:
    `/site/app.js` ... where to put your javascript
    `/site/layout.css` ... where to put your css
    `/site/index.html` ... where to put your markup, including templates

`buffet` is setup with a file watching system, such that you don't have
to restart the server to get the latest changes to these files. You do
have to reload your page though.
