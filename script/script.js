onload = b.onmouseover = function (e) {
    iW = innerWidth;
    iH = innerHeight;
    bW = 280;
    bH = 130;
    mX = e.pageX || 0;
    mY = e.pageY || 0;
    console.log(iW, iH, bW, bH, mX, mY);
    while (1) {
      x = Math.random() * (iW - bW);
      y = Math.random() * (iH - bH);
      if ((x > mX || x < mX - bW) && (y > mY || y < mY - bH)) {
        b.style.marginTop = y;
        b.style.marginLeft = x;
        break;
      }
    }
  };
