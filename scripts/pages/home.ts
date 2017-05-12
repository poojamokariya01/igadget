$("./body") {
  add_class("_home")

	$("./div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']/div[@id='LayoutColumn2']/div[@id='HomeFeaturedProducts']"){
		$("h2"){
			remove("span")
		}
		attribute("data-ur-set", "carousel")

		$("./div[@class='BlockContent']"){
				$(".//ul"){
					attribute("data-ur-carousel-component", "scroll_container")
					$("./li"){
						attribute("data-ur-carousel-component", "item")

					}
				}
		}
	}

	$("./div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']/div[@id='LayoutColumn2']/div[@id='HomeNewProducts']"){
		$("h2"){
			remove("span")
		}
		attribute("data-ur-set", "carousel")

		$("./div[@class='BlockContent']"){
				$(".//ul"){
					attribute("data-ur-carousel-component", "scroll_container")
					$("./li"){
						attribute("data-ur-carousel-component", "item")

					}
				}
		}
	}
	remove("./div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']/div[@id='LayoutColumn3']")
}