import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { PoSyncConfig, PoNetworkType, PoSyncService } from '@po-ui/ng-sync';

import { conferenceSchema } from './home/conference-schema.constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private poSync: PoSyncService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.initSync();

    });
  }

  initSync() {
    const config: PoSyncConfig = {
      type: PoNetworkType.ethernet
    };
    const schemas = [conferenceSchema];

    this.poSync.prepare(schemas, config).then(() => {
      this.poSync.sync();
    });
  }
}
