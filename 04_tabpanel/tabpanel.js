var TabPanel = (function()
{
	/**
	 * Constructor
	 *
	 * @param {Element} container The container that this instance is managing.
	 */
	function TabPanel(container)
	{
		this.container = container;
		this.AddTabBar();
	}

	/**
	 * Gets a list of article containers which are our tab content containers.
	 *
	 * @returns {NodeList}
	 */
	TabPanel.prototype.GetTabs = function()
	{
		return this.container.querySelectorAll('article');
	};

	/**
	 * Adds a new UL List to the container that becomes the clickable buttons.
	 */
	TabPanel.prototype.AddTabBar = function()
	{
		// Create the new tab bar UL list
		var tabBar = document.createElement('ul');
		tabBar.classList.add("tab-bar");
		tabBar.classList.add("cf");

		// Loop through the article containers
		var tabs = this.GetTabs();
		for(var i = 0; i < tabs.length; i++)
		{
			// Create a new li with the text of the article title attribute
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(tabs[i].getAttribute('title')));

			// Assign an event handler for the tab click event
			li.onclick = this.OnTabClick.bind(this, tabs[i]);

			// Add the li to the tab bar
			tabBar.appendChild(li);
		}

		// Insert the tab bar after the tab panel heading and before the first article
		this.container.insertBefore(tabBar, this.container.querySelectorAll('article')[0]);
	};

	/**
	 * Tab Button Click Event Handler
	 *
	 * @param {Element} tabToShow The article container to show.
	 */
	TabPanel.prototype.OnTabClick = function(tabToShow)
	{
		// Hide all the tabs
		var tabs = this.GetTabs();
		for(var i = 0; i < tabs.length; i++)
		{
			tabs[i].style.display = 'none';
		}

		// Show the one we need to
		tabToShow.style.display = 'block';
	};

	return TabPanel;
})();

/**
 * Made some slight tweaks to the provided code.
 * Instead of calling a seperate "init" method,
 * I have passed the "section" element directly to the
 * constructor of our TabPanel component.
 */
var panels = [];
window.onload = function()
{
	for(var i = 0; i < document.body.children.length; i++)
	{
		child = document.body.children[i];
		if(child.tagName.toLowerCase() != 'section') continue;
		window.panels.push(new TabPanel(child));
	}
};
