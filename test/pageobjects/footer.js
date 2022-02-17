class Footer {
    
    get cookieLink(){
        return $('a*=Cookies');
    }

    get legalLink(){
        return $('a*=Legal');
    }

    get privacyLink(){
        return $('a*=Privacy');
    }

    get socialMediaLink(){
        return $('a*=Social Media');
    }

    get tellUsLink(){
        return $('a*=Tell Us');
    }

    get copyright(){
        return $('[data-autoid="footer\\:copyright"]');
    }
}

export default new Footer();