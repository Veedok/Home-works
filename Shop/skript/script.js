 var canv = document.getElementById('test_canvas'),
                    ctx = canv.getContext('2d'),
                    mouseDown = false,
                    xLine = 10,
                    yLine = 10,
                    saves = [],
                    x,
                    y;

                function save() {
                    localStorage.setItem('saves', JSON.stringify(saves));
                }

                function bbb(x, y) {
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = 'orange';
                    while (y < 500) {
                        if (x == 10) {
                            x = x + 10;
                        } else {
                            x = x - 10;
                        }
                        ctx.lineTo(x, y);
                        y = y + 10;
                    }
                    while (x < 1140) {
                        if (y == 480) {
                            y = y + 10;
                        } else {
                            y = y - 10;
                        }
                        ctx.lineTo(x, y);
                        x = x + 10;
                    }
                    while (y > 10) {
                        if (x == 1120) {
                            x = x + 10;
                        } else {
                            x = x - 10;
                        }
                        ctx.lineTo(x, y);
                        y = y - 10;
                    }
                    while (x > 0) {
                        if (y == 10) {
                            y = y + 10;
                        } else {
                            y = y - 10;
                        }
                        ctx.lineTo(x, y);
                        x = x - 10;
                    }
                    ctx.stroke();
                };

                function star() {
                    ctx.lineWidth = 5;
                    ctx.strokeStyle = 'red';
                    ctx.beginPath();
                    ctx.moveTo(20, xLine);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(560, 60);
                    ctx.lineTo(520, 170);
                    ctx.lineTo(410, 170);
                    ctx.lineTo(500, 230);
                    ctx.lineTo(460, 350);
                    ctx.lineTo(560, 260);
                    ctx.lineTo(660, 350);
                    ctx.lineTo(620, 230);
                    ctx.lineTo(710, 170);
                    ctx.lineTo(600, 170);
                    ctx.lineTo(560, 60);
                    ctx.stroke();
                    ctx.beginPath();
                }
                canv.onmousemove = function() {
                    x = event.offsetX;
                    y = event.offsetY;
                    document.getElementById('one').innerHTML = 'x: ' + x + ' y: ' + y;
                }
                canv.addEventListener('mousedown', function() {
                    mouseDown = true;
                });
                canv.addEventListener('mouseup', function() {
                    mouseDown = false;
                    ctx.beginPath();
                    saves.push('mouseup');
                });

                canv.addEventListener('mousemove', function(e) {
                    if (mouseDown) {
                        saves.push([e = x, e = y]);
                        ctx.fillStyle = 'green';
                        ctx.strokeStyle = 'green';
                        ctx.lineWidth = 5 * 2;
                        ctx.lineTo(e = x, e = y);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(e = x, e = y, 5, 0, Math.PI * 2, );
                        ctx.fill();
                        ctx.beginPath();
                        ctx.moveTo(e = x, e = y);
                    }
                });

                function nexTry() {
                    ctx.fillStyle = 'white';
                    ctx.fillRect(0, 0, canv.width, canv.height);
                    ctx.beginPath();
                    ctx.fillStyle = 'green';
                }

                function reolay() {
                    var taimer = setInterval(function() {
                        if (!saves.length) {
                            clearInterval(taimer);
                            ctx.beginPath();
                            return;
                        }
                        var crd = saves.shift(),
                            e = {
                                clientX: crd["0"],
                                clientY: crd["1"]
                            };
                        ctx.fillStyle = 'red';
                        ctx.strokeStyle = 'red';
                        ctx.lineWidth = 5 * 2;
                        ctx.lineTo(e.clientX, e.clientY);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2, );
                        ctx.fillStyle = 'red';
                        ctx.fill();
                        ctx.beginPath();
                        ctx.moveTo(e.clientX, e.clientY);
                    }, 30);
                };
                document.addEventListener('keydown', function(e) {
                    console.log(e.keyCode);
                    if (e.keyCode == 67) {
                        //рус с
                        save();
                        alert('Сохранено');
                    }
                    if (e.keyCode == 68) {
                        //рус в
                        saves = JSON.parse(localStorage.getItem('saves'));
                        nexTry();
                        reolay();
                        alert('Воспроизвести рисунок');
                    }
                    if (e.keyCode == 74) {
                        //рус о
                        nexTry();
                        alert('Очистка выполнена');
                    }
                    if (e.keyCode == 80) {
                        //рус з
                        star();
                        alert('Звезда');
                    }
                    if (e.keyCode == 72) {
                        //рус р

                        bbb(xLine, yLine);
                        alert('Рамка');
                    }
                });

            