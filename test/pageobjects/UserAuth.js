import { browser, $, expect } from '@wdio/globals'

class AuthUser{
    //elemen locator
    get isiEmail () { return $('input[@type="email"]') }
    get isiPassw () { return $('input[@type="password"]') }
    get tombolLogin () { return $('[data-test="login-button"]') }
    get errMsg  () { return $('.fr-text.caution')}
    
    
    //page actions
    async loginWeb(){
        await browser.url('https://www.uniqlo.com/id/auth/v1/login')
    }

    async Proses(EmailMu, PassMu){
        await this.isiEmail.setValue(EmailMu)
        await this.isiPassw.setValue(PassMu)
        await this.tombolLogin.click()
    }

}

export default new AuthUser()