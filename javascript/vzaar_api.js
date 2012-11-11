(function(global) {
  function vzPlayer(iframe_id) {
    var iframe = document.getElementById(iframe_id);
    this.player = global.$f(iframe);
    
    return this;
  }

  vzPlayer.prototype = {
    play2: function() { this.player.api("play2"); },
    pause: function() { this.player.api("pause"); },
    playPause: function() { this.player.api("playPause"); },
    seekTo: function(n) { this.player.api("seekTo", n); },
    getTime: function(fn) { this.player.api("getTime", fn); },
    getTotalTime: function(fn) { this.player.api("getTotalTime", fn); },
    setVolume: function(n) { this.player.api("setVolume", n); },
    getVolume: function(fn) { this.player.api("getVolume", fn); },
    muteOn: function() { this.player.api("muteOn"); },
    muteOff: function() { this.player.api("muteOff"); },
    muteToggle: function() { this.player.api("muteToggle"); },
    getMute: function(fn) { this.player.api("getMute", fn); },
    loadVideo: function(i) { this.player.api("loadVideo", i); },
    playlistPlay: function(i) { this.player.api("playlistPlay", i); },
    addEventListener: function(event, callback) {
      this.player.addEvent(event, callback);
    },
    removeEventListener: function(event) {
      this.player.removeEvent(event);
    },
    ready: function(fn) { this.player.addEvent("ready", fn); }
  };

  global.vzPlayer = vzPlayer;
})(window);