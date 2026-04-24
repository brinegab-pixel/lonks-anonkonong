class Point {
    constructor(public x: number, public y: number) { }
}

abstract class Shape {
    public points: Point[] = [];
    public fillColor: string = black;
    protected rotation: number = 0;

    // Defines how the piece rotates (crucial for unsimplified, accurate movement)
    public abstract rotate(clockwise: boolean): void;
}

class TShape extends Shape {
    constructor(cols: number) {
        super();
        this.fillColor = purple;
        this.points = [];
        var x = Math.floor(cols / 2);
        var y = 0;
        this.points.push(new Point(x - 1, y));
        this.points.push(new Point(x, y)); // base point
        this.points.push(new Point(x + 1, y));
        this.points.push(new Point(x, y + 1));
    }

    public rotate(clockwise: boolean): void {
        this.rotation = (this.rotation + (clockwise ? 1 : -1)) % 4;




        class Arena {
            private matrix: number[][];

            constructor(private rows: number, private cols: number) {
                this.matrix = this.createMatrix(rows, cols);
            }

            private createMatrix(rows: number, cols: number): number[][] {
                return Array(rows).fill(0).map(() => Array(cols).fill(0));
            }

            public collide(piece: Shape): boolean {
                // Collision detection: Check if piece.points are outside bounds or hit filled matrix cells
                for (let p of piece.points) {
                    if (p.x < 0 || p.x >= this.cols || p.y >= this.rows ||
                        (p.y >= 0 && this.matrix[p.y][p.x] !== 0)) {
                        return true;
                    }
                }
                return false;
            }

            public merge(piece: Shape): void {
                piece.points.forEach(p => {
                    if (p.y >= 0) this.matrix[p.y][p.x] = 1; // Mark filled
                });
            }
        }


        function render(ctx: CanvasRenderingContext2D, arena: number[][], currentPiece: Shape): void {
            // Clear board
            ctx.fillStyle = white;
            ctx.fillRect(0, 0, 300, 600)}