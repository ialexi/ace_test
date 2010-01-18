// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile */

require('views/control_sample');


SampleControls.mainPage = SC.Page.create({
  
  pageName: 'SampleControls.mainPage',
  
  mainPane: SC.MainPane.design({
    childViews: "toolbar split".w(),
    
    toolbar: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 32 },
      childViews: "label".w(),
      label: SC.LabelView.design({
        layout: { left: 10, centerY: 0, height: 21, width: 200 },
        value: "Sample Controls",
        classNames: "embossed".w()
      })
    }),
    split: SC.SplitView.design ({
      layout: {left: 0, top: 32, right: 0, bottom: 0},
      dividerThickness: 0,
      defaultThickness: 200,
      topLeftView: SC.SourceListView.design({
        layout: { left: 0, top: 0, right: 0, bottom: 0 },
        contentValueKey: "name",
        contentIndexIsGroup: function(view, content, idx) {
          return content[idx].group;
        },
        contentIndexOutlineLevel: function(view, content, idx) {
          return content[idx].group ? 0 : 1;
        },
        contentIndexDisclosureState: function(view, content, idx) {
          return content[idx].group ? content[idx].groupState : SC.LEAF_NODE;
        },
        content: [
          SC.Object.create({
            name: "Controls",
            group: YES,
            groupState: SC.BRANCH_OPEN
          }),
          SC.Object.create({
            name: "Buttons"
          }),
          SC.Object.create({
            name: "Progress"
          }),
          SC.Object.create({
            name: "Collections",
            group: YES,
            groupState: SC.BRANCH_OPEN
          }),
          SC.Object.create({
            name: "List"
          })
        ]
      }),
      bottomRightView: SC.ContainerView.design({
        nowShowing: "welcome"
      })
    })
    
  }),

  welcome: SC.LabelView.design({
    escapeHTML: NO,
    classNames: 'welcome-tab',
    value: "<h1>Sample Controls</h1><p>SproutCore comes bundled with a wide array of controls that you can use in your own applications. Most of these controls can be created very easily using the built-in view helper functions. Consult the source code of this application for samples code to use in your own application.</p>"
  })
  
});
