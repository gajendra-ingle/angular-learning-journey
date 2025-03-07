import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { StudentComponent } from './student/student.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventBinding2Component } from './event-binding-2/event-binding-2.component';
import { FormsModule } from '@angular/forms';
import { EventBinding3Component } from './event-binding-3/event-binding-3.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './summary.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    StudentComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EventBinding2Component,
    EventBinding3Component,
    IfDirectiveComponent,
    ForDirectiveComponent,
    SwitchDirectiveComponent,
    Parent1Component,
    Child1Component,
    InbuildPipeComponent,
    CustompipeComponent,
    SummaryPipe,
    PostComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    FollowerComponent,
    MyfollowerComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
