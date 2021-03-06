(function(w){
  'use strict';
  w.owResolutionEvents = class {
    constructor({xxs = 480, xs = 576, sm = 768, md = 992, lg = 1200, xl = 1600}) {
      this.resolutions = {
        '0': {
          'status': false,
          'width': xxs,
          'event': 'doubleextrasmallresolution',
        },
        '1': {
          'status': false,
          'width': xs,
          'event': 'extrasmallresolution',
        },
        '2': {
          'status': false,
          'width': sm,
          'event': 'smallresolution',
        },
        '3': {
          'status': false,
          'width': md,
          'event': 'mediumresolution',
        },
        '4': {
          'status': false,
          'width': lg,
          'event': 'largeresolution',
        },
        '5': {
          'status': false,
          'width': xl,
          'event': 'extralargeresolution',
        },
      };

      this.current = {};
    }

    init() {
      Object
        .keys(this.resolutions)
        .map(key => {
          this.resolutions[key].event = new CustomEvent(this.resolutions[key].event, {
            detail: {name: this.resolutions[key].event},
          });
      });

      this.callowResolutionEventsEvent();

      window.addEventListener('resize', function() {
        this.callowResolutionEventsEvent();
      }.bind(this));
    }

    resolutionUpdate(resolution) {
      Object
        .keys(this.resolutions)
        .map(key => key === resolution
          ? this.resolutions[key].status = true
          : this.resolutions[key].status = false
        );
    }

    callowResolutionEventsEvent() {
      const width = window.outerWidth;

      for (let key in this.resolutions) {

        if (width <= this.resolutions[key].width && !this.resolutions[key].status) {

          if (
            (this.current.status && this.current.width)
            && width <= this.current.width
            && this.current.width < this.resolutions[key].width
            && this.current.status !== this.resolutions[key].status
          ) return true;

          this.resolutionUpdate(key);
          document.dispatchEvent(this.resolutions[key].event);
          this.current.status = key;
          this.current.width = this.resolutions[key].width;
        }
      }
    }
  }
})(window)