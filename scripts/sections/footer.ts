$("./body") {
  // insert("footer", "Powered by Moovweb", class: "mw-footer") {
  //   // # Move or insert elements here
  // }
//   insert("div","mw_currency",class:"mw_currency"){

//   }
//  //
	$("./div[@id='Footer']"){
	 	remove("./p")
	 	insert("div"){
		 	insert("div","All prices are in ",class:"mw_currency"){
		 		insert("span","USD",title:"Default Currency")
		 	}
		 	insert("div",class:"mw_copy"){
		 		insert("span","Copyright 2014 iGadgetCommerce.")
		 	}
		 	insert("div",class:"mw_moovweb"){
		 		insert("span","powered by:",class:"mw_powered")
		 		insert("div",class:"sprites-moovweb")
		 	}
		}




//  		// $name = fetch("./p")
// 		// log(concat("Did I reach ", $name, "?"))
//  		// text() {
// 	  //   replace(/ All prices are in USD. Copyright 2017 iGadgetCommerce. | by BigCommerce /) {
// 	  //     set("")
// 	  //   }
// 	  // }
  }
}