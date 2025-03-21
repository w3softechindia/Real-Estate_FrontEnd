import { Component } from '@angular/core'
import { PageTitleComponent } from '@component/page-title.component'
import { UIExamplesListComponent } from '@component/ui-examples-list/ui-examples-list.component'
import { WorldVectorMapComponent } from '@component/vector-maps/world-vector-map.component'

import 'jsvectormap'
import 'jsvectormap/dist/maps/world.js'
import 'jsvectormap/dist/maps/russia.js'
import 'jsvectormap/dist/maps/canada.js'
import 'jsvectormap/dist/maps/iraq.js'
import 'jsvectormap/dist/maps/spain.js'

@Component({
  selector: 'app-vector',
  standalone: true,
  imports: [
    PageTitleComponent,
    UIExamplesListComponent,
    WorldVectorMapComponent,
  ],
  templateUrl: './vector.component.html',
  styles: ``,
})
export class VectorComponent {
  worldMapConfig = {
    map: 'world',
    selector: '#world-map-markers',
    zoomOnScroll: false,
    zoomButtons: true,
    markersSelectable: true,
    markers: [
      { name: 'Greenland', coords: [72, -42] },
      { name: 'Canada', coords: [56.1304, -106.3468] },
      { name: 'Brazil', coords: [-14.235, -51.9253] },
      { name: 'Egypt', coords: [26.8206, 30.8025] },
      { name: 'Russia', coords: [61, 105] },
      { name: 'China', coords: [35.8617, 104.1954] },
      { name: 'United States', coords: [37.0902, -95.7129] },
      { name: 'Norway', coords: [60.472024, 8.468946] },
      { name: 'Ukraine', coords: [48.379433, 31.16558] },
    ],
    markerStyle: {
      initial: { fill: '#5B8DEC' },
      selected: { fill: '#ef5f5f' },
    },
    labels: {
      markers: {
        render: (marker: any) => marker.name,
      },
    },
    regionStyle: {
      initial: {
        fill: 'rgba(169,183,197, 0.2)',
        fillOpacity: 1,
      },
    },
  }

  canadaMapConfig = {
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#1e84c4',
      },
    },
  }

  russiaMapConfig = {
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#1bb394',
      },
    },
  }
  spainMapConfig = {
    map: 'spain',
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#23c6c8',
      },
    },
  }

  italyMapConfig = {
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#fa5c7c',
      },
    },
  }
  iraqMapConfig = {
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#f8ac59',
      },
    },
  }
}
