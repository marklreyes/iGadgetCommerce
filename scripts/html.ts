# HTML Transformations go here

$("/html") {
	add_canonical_tag()
	rewrite_links()
	absolutize()
	rewrite_aspnet_scripts()

	add_assets()

	$("./head") {
		# Add viewport meta tag for mobile
		insert_top("meta", name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")

		#Add Twitter Bootstrap 3.3.1 CSS file
		# insert("link", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css", rel: "stylesheet")
	}

	# Wrap the inner contents of the body tag in a div
	# with a class of mw-body 
	$("/html/body") {
		# inner_wrap("div", class: "mw-body")
	  remove(".//br[contains(@class, 'Clear')]")
	}

	@import "sections/header.ts"
	@import "sections/footer.ts"

	@import "mappings.ts"

	# Web performance methods
	move_css_to_head()
	move_css_above_scripts()
	remove_comments()
	trim_urls()
	elide_attributes()
	combine_heads()
}
