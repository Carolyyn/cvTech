import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { ColorComponent } from './components/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { RotatingCardComponent } from './pages/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CardComponent } from './cv/card/card.component';
import { TestngstyleComponent } from './directives/testngstyle/testngstyle.component';
import { WordComponent } from './pages/word/word.component';
import { TestngclassComponent } from './components/testngclass/testngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { NgiftestComponent } from './directives/ngiftest/ngiftest.component';
import { MoneyConvertorPipe } from './pipes/money-convertor.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { ChiffreMagiqueComponent } from './pages/chiffre-magique/chiffre-magique.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { GitComponent } from './git/git.component';
import { NF404Component } from './nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './pages/login/login.component';
import { ObservableTestComponent } from './components/observable-test/observable-test.component';
import { HttpTestComponent } from './components/http-test/http-test.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    TwoWayComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    TestngstyleComponent,
    WordComponent,
    TestngclassComponent,
    HighlightDirective,
    RainbowDirective,
    NgiftestComponent,
    MoneyConvertorPipe,
    DefaultImagePipe,
    TodoComponent,
    HeaderComponent,
    ChiffreMagiqueComponent,
    RouterSimulatorComponent,
    DetailPersonneComponent,
    GitComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    ObservableTestComponent,
    HttpTestComponent,
    AddPersonneComponent,
    EmbaucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
