SampleControls.buttonsPage = SC.View.design({
  childViews: "form".w(),
  form: Forms.FormView.design({
    classNames: ["sample_controls"],
    layout: { left: 20, top: 40, right: 20, bottom: 40 },
    fields: "header normal disabled normalToggle disabledToggle disclosureHeader disclosureClosed disclosureOpen".w(),
    header: Forms.FormView.row(SC.LabelView, {
      autoResize: YES,
      classNames: "header".w(),
      value: "Buttons",
      fieldLabel: NO
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
    }),
    disclosureHeader: Forms.FormView.row(SC.LabelView, {
      layout: { width: 400 },
      autoResize: YES,
      classNames: "header".w(),
      value: "Disclosure Buttons",
      fieldLabel: NO
    }),
    disclosureClosed: Forms.FormView.row(SC.DisclosureView, {
      layout: { height: 24, centerY: 0, left: 0, width: 100 },
      title: "Disclosure Closed",
      value: NO
    }),
    disclosureOpen: Forms.FormView.row(SC.DisclosureView, {
      layout: { height: 24, centerY: 0, left: 0, width: 150 },
      title: "Disclosure Open",
      value: YES
    })
  })
});