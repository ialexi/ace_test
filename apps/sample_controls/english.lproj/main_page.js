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
    
  }),

  welcome: SC.LabelView.design({
    escapeHTML: NO,
    classNames: 'welcome-tab',
    value: "<h1>Sample Controls</h1><p>SproutCore comes bundled with a wide array of controls that you can use in your own applications. Most of these controls can be created very easily using the built-in view helper functions. Consult the source code of this application for samples code to use in your own application.</p>"
  }),
  
  progress_page: SC.View.design({
    childViews: "form".w(),
    form: Forms.FormView.design({
      classNames: ["sample_controls"],
      layout: { left: 20, top: 40, right: 20, bottom: 40 },
      fields: "header normal disabled".w(),
      header: Forms.FormView.row(SC.LabelView, {
        autoResize: YES,
        classNames: "header".w(),
        value: "Progress Bars",
        fieldLabel: NO,
      }),
      normal: Forms.FormView.row(SC.ProgressView, {
        layout: { height: 20, centerY: 0, left: 0, width: 200 },
        value: .25
      }),
      disabled: Forms.FormView.row(SC.ProgressView, {
        layout: { height: 20, centerY: 0, left: 0, width: 200 },
        isEnabled: NO
      })
    })
  }),
  
  buttons_page: SC.View.design({
    childViews: "form".w(),
    form: Forms.FormView.design({
      classNames: ["sample_controls"],
      layout: { left: 20, top: 40, right: 20, bottom: 40 },
      fields: "header normal disabled normalToggle disabledToggle".w(),
      header: Forms.FormView.row(SC.LabelView, {
        autoResize: YES,
        classNames: "header".w(),
        value: "Buttons",
        fieldLabel: NO,
      }),
      normal: Forms.FormView.row(SC.ButtonView, {
        layout: { height: 24, centerY: 0, left: 0, width: 100 },
        title: "Click Me"
      }),
      disabled: Forms.FormView.row(SC.ButtonView, {
        layout: { height: 24, centerY: 0, left: 0, width: 150 },
        isEnabled: NO,
        title: "Don't Click Me"
      }),
      normalToggle: Forms.FormView.row(SC.ButtonView, {
        layout: { height: 24, centerY: 0, left: 0, width: 100 },
        title: "Toggle Me",
        buttonBehavior: SC.TOGGLE_BEHAVIOR
      }),
      disabledToggle: Forms.FormView.row(SC.ButtonView, {
        layout: { height: 24, centerY: 0, left: 0, width: 150 },
        isEnabled: NO,
        title: "Don't Toggle Me",
        buttonBehavior: SC.TOGGLE_BEHAVIOR
      })
    })
  }),
  
  checkboxes_page: SC.View.design({
    childViews: "form".w(),
    form: Forms.FormView.design({
      classNames: ["sample_controls"],
      layout: { left: 20, top: 40, right: 20, bottom: 40 },
      fields: "header normal disabled".w(),
      header: Forms.FormView.row(SC.LabelView, {
        autoResize: YES,
        classNames: "header".w(),
        value: "Checkboxes",
        fieldLabel: NO
      }),
      normal: Forms.FormView.row(SC.CheckboxView, {
        layout: { left: 0, width: 150, height: 24, centerY: 0},
        title: "Test"
      }),
      disabled: Forms.FormView.row(SC.CheckboxView, {
        layout: { left: 0, width: 150, height: 24, centerY: 0},
        isEnabled: NO,
        title: "Test"
      })
    })
  })
  
});
