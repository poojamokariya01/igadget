$("./body") {
  add_class("mw_category")

  $("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
      $("./div[@class='Left']") {
        // # Create Togglers
        $("./div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
          attribute("data-ur-set", "toggler")
          $("./h2") {
            attribute("data-ur-toggler-component", "button")
            attribute("data-ur-state", "disabled")
            insert("div", class: "mw_indicator")
          }
          $("./div") {
            $("ul"){
            attribute("data-ur-toggler-component", "content")
            attribute("data-ur-state", "enabled")
            }
            $(".//li/a") {
              insert("div", class: "mw_arrow")
            }
          }
        }
        remove($(".//div[contains(@class, 'NewsletterSubscription')]"))
        remove($("./div[@id='CategoryBreadcrumb']"))
      }
      $("./div[@class='Content ']") {
        $("./div[@id='CategoryHeading']") {
          $("./div[@class='BlockContent']") {
            // # Move page title on top of the content area
            $("./h2") {
              move_to("../../../../div[@class='Left']", "top")
            }
            $("./div[@class='FloatRight SortBox']") {
              $("./form") {
                wrap_text_children("span")
              }
            }
          }
        }
        $("./div[@id='CategoryContent']/form[@id='frmCompare']/div[@class='CompareButton']"){
          remove()
        }
      }
      $("./div[@id='LayoutColumn3']"){
        remove()
      }
    }
  }


}