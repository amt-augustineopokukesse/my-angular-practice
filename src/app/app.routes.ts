import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'profile-editor', component: ProfileEditorComponent }
];
