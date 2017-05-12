$("./body") {
	$("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
			$("./div[@id='LayoutColumn1']") {
				$("./div[@id='SideNewProducts']") {
					$("./h2") {
						remove()
          }
					$("./div[@class='BlockContent']"){
						remove()
					}
				}
			}
			$("./div[@id='LayoutColumn2']") {
				$("./div[@id='ProductBreadcrumb']"){
					remove()
				}
				$("./div[@id='ProductDetails']/div[@class='BlockContent']"){
					$("./div[@class='AddThisButtonBox']"){
	        	insert("div", class: "POOOOOOOOOOOOOOOOOOOOOOOOOOOO")
	        	// remove()
	        }
				}
			}
			$("./div[@id='LayoutColumn3']"){
        remove()
      }
		}
	}
}