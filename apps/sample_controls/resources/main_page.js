// ==========================================================================
// SampleControls
// copyright 2008 Sprout Systems, Inc.
// ==========================================================================
/*global SampleControls tile Forms */

require("resources/progress_page");
require("resources/buttons_page");
require("resources/checkboxes_page");
require("resources/radio_page");
require("resources/select_page");
require("resources/segmented_page");
require("resources/text_field_page");

SampleControls.mainPage = SC.Page.create({
  
  pageName: 'SampleControls.mainPage',
  
  mainPane: SC.PanelPane.design(SC.Animatable, {
    contentView: SC.View.design({
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
      dividerThickness: 1,
      defaultThickness: 200,
      topLeftView: SC.SourceListView.design({
        layout: { left: 0, top: 0, right: 0, bottom: 0 },
        contentValueKey: "name",
        contentBinding: "SampleControls.categoriesController.arrangedObjects",
        selectionBinding: "SampleControls.categoriesController.selection"
      }),
      bottomRightView: SC.ContainerView.design({
        nowShowing: "welcome",
        nowShowingBinding: "SampleControls.categoryController.show"
      })
    })
    })
  }),

  welcome: SC.LabelView.design({
    escapeHTML: NO,
    classNames: 'welcome-tab',
    value: "<h1>Sample Controls</h1><p>SproutCore comes bundled with a wide array of controls that you can use in your own applications. Most of these controls can be created very easily using the built-in view helper functions. Consult the source code of this application for samples code to use in your own application.</p>"
  }),
  
  progress_page: SampleControls.progressPage,
  
  buttons_page: SampleControls.buttonsPage,
  
  checkboxes_page: SampleControls.checkboxesPage,
  
  radio_page: SampleControls.radioPage,
  
  select_page: SampleControls.selectPage,
  
  text_field_page: SampleControls.textFieldPage,
  
  segmented_page: SampleControls.segmentedPage
  
  
});
