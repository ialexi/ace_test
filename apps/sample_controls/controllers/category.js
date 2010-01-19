// ==========================================================================
// Project:   SampleControls.categoryController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals SampleControls */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
SampleControls.categoryController = SC.ObjectController.create(
/** @scope SampleControls.categoryController.prototype */ {
  contentBinding: "SampleControls.categoriesController.selection",
  contentBindingDefault: SC.Binding.single()

}) ;
