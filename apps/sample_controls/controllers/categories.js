// ==========================================================================
// Project:   SampleControls.categoriesController
// ==========================================================================
/*globals SampleControls */

/** @class
  @extends SC.CategoriesController
*/
SampleControls.rootCategory = SC.Object.create({
  treeItemIsExpanded: YES,
  treeItemChildren: [
    SC.Object.create({
      treeItemIsExpanded: YES,
      group: true,
      name: "Controls",
      treeItemChildren: [
        SC.Object.create({
          name: "Buttons",
          show: "buttons_page"
        }),
        SC.Object.create({
          name: "Checkboxes",
          show: "checkboxes_page"
        }),
        SC.Object.create({
          name: "Progress",
          show: "progress_page"
        }),
        SC.Object.create({
          name: "Radio",
          show: "radio_page"
        }),
        SC.Object.create({
          name: "Select Button",
          show: "select_page"
        })
      ]
    }),
    SC.Object.create({
      treeItemIsExpanded: YES,
      group: true,
      name: "Collections",
      treeItemChildren: [
        SC.Object.create({
          name: "List",
          show: "list_page"
        })
      ]
    }),
    SC.Object.create({
      treeItemIsExpanded: YES,
      group: true,
      name: "Fields",
      treeItemChildren: [
        SC.Object.create({
          name: "Text Field",
          show: "text_field_page"
        })
      ]
    })
  ]
});

SampleControls.categoriesController = SC.TreeController.create(
/** @scope SampleControls.appController.prototype */ {
  treeItemIsGrouped: YES
  // TODO: Add your own code here.
}) ;
