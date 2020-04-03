import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent, HorizontalGridComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective, RainBowDirective } from './directives';

@NgModule({
    declarations: [
        GridItemDirective,
        GridItemImageDirective,
        RainBowDirective,
        GridItemTitleDirective,
        FooterComponent,
        HorizontalGridComponent
    ],
    imports: [ CommonModule ],
    exports: [
        GridItemDirective,
        GridItemImageDirective,
        RainBowDirective,
        GridItemTitleDirective,
        FooterComponent,
        HorizontalGridComponent
    ],
    providers: [],
})
export class SharedModule {}