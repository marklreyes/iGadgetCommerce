# iGadgetCommerce homepage
# Transform the homepage of http://www.igadgetcommerce.com (9 points).
$("/html/body") {
  attributes(id: "mw-home")

  # Remove left col, right col and feedback links
  remove("//*[@id='LayoutColumn1']")
  remove("//*[@id='LayoutColumn3']")
  remove(".//span[contains(@class, 'FeedLink')]")
  remove("//*[@id='HomeRecentBlogs']")

  # Create a carousel for Featured Products/New Products modules
  $(".//div[@id='HomeFeaturedProducts' or @id='HomeNewProducts']") {

  	# Enable carousel attributes from Uranium
  	ur_set("carousel")
  	ur_attribute("center", "enabled")

  	# Insert carousel dot components
    insert("div") {
      ur_component("carousel", "dots")
    }

  	# Enable carousel item components for list elements
  	$(".//ul[contains(@class, 'ProductList')]") {
        ur_component("carousel", "scroll_container")
        $(".//li") {
          ur_component("carousel", "item")
        }
  	}
  }

}