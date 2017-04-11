import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import {AboutUsComponent } from './components/aboutUs/aboutUs.component';
import { ContactComponent } from './components/contactUs/contact.component';
import { ComingSoonComponent } from './components/comingSoon/comingsoon.component';
import { GamesComponent } from './components/games/games.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FooterComponent,
        AboutUsComponent,
        ContactComponent,
        ComingSoonComponent,
        GamesComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'games', component: GamesComponent},
            { path: 'comingsoon', component: ComingSoonComponent },
            { path: 'aboutUs', component: AboutUsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
