const tennisScores = [0, 15, 30, 40, 'deuce', 'advantage'] as const;
export type TennisScores = typeof tennisScores[number];

type WonBy = 'first' | 'second' | null;

export class TennisGame {
  private scoresIdx: [number, number] = [0, 0];
  private _wonBy: WonBy = null;
  public wonBy(): WonBy {
    return this._wonBy;
  }
  public isOver(): boolean {
    return this._wonBy !== null;
  }
  public toString(): string {
    return this.scoresIdx.map((idx) => tennisScores[idx]).join('-');
  }
  public firstPlayerScored() {
    if (tennisScores[this.scoresIdx[0]] == 40) {
      this._wonBy = 'first';
      return;
    }
    this.scoresIdx[0]++;
  }
  public secondPlayerScored() {
    if (tennisScores[this.scoresIdx[1]] == 40) {
      this._wonBy = 'first';
      return;
    }
    this.scoresIdx[1]++;
  }
}
