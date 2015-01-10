$("./body") {
  insert("footer", "Powered by Moovweb", class: "mw-footer") {
    # Move footer p tags to mw-footer
    move_here("//*[@id='Footer']/p")

    # Remove desktop footer container
    remove("//*[@id='Footer']")

	#Add Twitter Bootstrap 2.3.2 JS file
	insert("script", src: "https://maxcdn.bootstrapcdn.com/bootstrap/2.3.2/js/bootstrap.min.js")
  }
}
