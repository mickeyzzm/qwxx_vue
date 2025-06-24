function deg(angle = 0) {
  return (angle * Math.PI) / 180;
}

class RingChart {
  constructor(id, data) {
    this.id = id;
    this.childId = `${id}_self`;
    this.data = data;
    this.container = document.getElementById(id);
    this.dom = document.createElement("canvas");
    this.dom.id = this.childId;
    this.dom.width = document.getElementById(this.id).clientWidth;
    this.dom.height = document.getElementById(this.id).clientHeight;
    this.ctx = this.dom.getContext("2d");
    this.container.appendChild(this.dom);
    this.draw();
  }
  draw(items) {
    if (items) {
      this.data = items;
    }
    this.width = this.dom.width;
    this.height = this.dom.height;
    let legend_width = 150;
    this.originPoint = [
      Number((this.width - legend_width) / 2),
      Number(this.height) / 2,
    ];
    const { ctx, data, width, height } = this;
    ctx.clearRect(0, 0, width, height);
    ctx.translate(this.originPoint[0], this.originPoint[1]);
    ctx.save();

    let radius = 20;
    data.forEach((ring, idx) => {
      let angle = deg((ring.value / 100) * 360);
      radius += 12;
      this.drawRing(angle, radius, 8, ring.color);
      let position = [];
      position.push(this.originPoint[0]);
      position.push((parseInt(-this.data.length / 2) + idx + 1) * 32);
      this.drawLegend(ring.color, ring.label, position, 8);
    });
    ctx.translate(-this.originPoint[0], -this.originPoint[1]);
  }
  drawRing(angle, radius, width = 8, color = "#fff") {
    const { ctx } = this;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, deg(360));
    ctx.lineCap = "round";
    ctx.lineWidth = width;
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, angle, false);
    ctx.lineCap = "round";
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }
  drawLegend(color, text, position, lineWidth) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.moveTo(position[0], position[1]);
    ctx.lineTo(position[0] + lineWidth, position[1]);
    ctx.lineCap = "round";
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.beginPath();
    ctx.font = "14px Microsoft YaHei";
    ctx.fillStyle = "#fff";
    ctx.fillText(text, position[0] + lineWidth + 12, position[1] + 4);
    ctx.closePath();
    ctx.restore();
  }
}

export { RingChart };
