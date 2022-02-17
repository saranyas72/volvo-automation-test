class Header {
    get sideNavigation() {
        return $("#nav\\:sideNavigation");
    }

    get sideNavigationToggle() {
        return $("#sitenav-sidenav-toggle");
    }

    get sideNavigationClose() {
        return $('[data-testid="close"]');
    }

    get carMenu(){
        return $('#nav\\:topNavCarMenu');
    }

    get carMenuDrop(){
        return $('[data-autoid=nav\\:carMenuDesktop]');
    }

    get menu_aboutVolvo(){
        return $('button*=About Volvo');
    }

    get sustainabilityLink(){
        return $('a*=Sustainability');
    }

    get carMenu_Electric(){
        return $('#site-nav-cars-menu-section-tab-0');
    }

    async goToCarMenu_Electric(){
        await this.carMenu.click();
        await this.carMenu_Electric.click();
    }
}

export default new Header();