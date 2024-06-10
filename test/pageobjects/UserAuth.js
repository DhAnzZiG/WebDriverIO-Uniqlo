import { browser, $, expect } from '@wdio/globals'

class AuthUser{
    //elemen locator
    get isiEmail () { return $('input[name="login_id"]') }
    get isiPassw () { return $('input[name="password"]') }
    get tombolLogin () { return $('a[data-test="login-button"]') }
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