This is a test for theming SproutCore. My work on Ace is a submodule.

As such, when you clone the repo, make sure to run:

	git submodule init
	git submodule update


Ace Theme
=========
(from themes/ace/README.md)

The theme should already be generated. To actually regenerate the theme
(which you have to do if you are adjusting it), you need rmagick. To install 
rmagick, first install imagemagick (easiest way I know of is through MacPorts),
and then install the rmagick gem.

To generate the theme, you run the following from the theme folder:

    chance/chance.rb ace.light

Right now, the ace.light argument is not used, but it is still a required argument.
Silly, I know, but supposedly we'll have differently-named themes at some point, so...

"Chance" is named after the gardener from Being There.

Sample Controls
===============
I have been rewriting the sample controls app. You can see a somewhat recent version here:

http://create.tpsitulsa.com/static/sample_controls/

Known issues/partially implemented controls:

- FormView has a bug that causes RadioViews to disappear if you visit, leave, and come back to them.
- No indeterminate progress bar design.
- No capsule buttons.
- No alternate control sizes.
- Some corners/edges appear weird (possible the path edges are not pixel-aligned)


There are many more completely unimplemented controls, but those are easier to notice than partially-implemented ones.

