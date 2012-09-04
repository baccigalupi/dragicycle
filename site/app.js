Wheel.App.subclass('App', {
  init: function() {
    var $game_board = $('.game_board');
    this.pieces = [
      App.Piece.build({parent: $game_board}),
      App.Piece.build({parent: $game_board}),
      App.Piece.build({parent: $game_board}),
      App.Piece.build({parent: $game_board}),
      App.Piece.build({parent: $game_board})
    ];
  }
});

Wheel.View.subclass('App.Piece', {
  init: function() {
    this.width = this.$.width();
    this.height = this.$.height();
    this.animateOn();
  },

  listen: function() {
    // start dragging
    this.$.on('tapstart', function(e) {
      this.$.trigger('pullinit');
    }.bind(this));

    this.$.on('pullstart', function(e) {
      this.onDragStart(e);
    }.bind(this));

    this.$.on('pullmove', function(e) {
      this.onDragMove(e);
    }.bind(this));

    this.$.on('pullend', function(e) {
      this.onDragEnd(e);
    }.bind(this));
  },

  onDragStart: function(e) {
    var $target = $(e.target);
    $target.addClass('dragging');
    var offset = $target.offset();
    var board = this._class.board();
    this.dragData = {
      $: $target,
      aX: e.pageX, // original tapstart locations
      aY: e.pageY,
      eX: offset.left - board.left, // position of the element on the page
      eY: offset.top - board.top,
      eWidth: offset.width, // width and height of element
      eHeight: offset.height
    };
  },

  onDragMove: function(e) {
    var d = this.dragData;
    d.$
      .css('left', d.eX + e.deltaX)
      .css('top', d.eY + e.deltaY);
  },

  onDragEnd: function(e) {
    this.dragData.$.removeClass('dragging');
    this.dragData = null;
  },

  animateOn: function() {
    var board = this._class.board();

    setTimeout(function() {
      this.$
        .css('left', Math.random() * (board.width - this.width))
        .css('top', Math.random() * (board.height - this.height))
        .css('background-color', this._class.randomColor());
    }.bind(this), Math.random()*100);
  }
}, {
  board: function() {
    if (this._board) return this._board;
    this._board = $('.game_board').offset();
    return this._board;
  },

  randomColor: function() {
    var rand = function() {
      return Math.floor(Math.random()*256);
    }
    return 'rgb('+ rand() +','+ rand() +','+ rand() +')';
  }
});
