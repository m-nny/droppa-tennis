const tennisScores = [0, 15, 30, 40, 'deuce', 'advantage'] as const;
export type TennisScores = typeof tennisScores[number];

type WonBy = 'first' | 'second' | null;

export class TennisGame {
  private scoresIdx: [number, number] = [0, 0];
  private wonBy: WonBy = null;
  public getWonBy(): WonBy {
    return this.wonBy;
  }
  public isOver(): boolean {
    return this.wonBy !== null;
  }
  public getScore(): string {
    return this.scoresIdx.map((idx) => tennisScores[idx]).join('-');
  }
  public firstPlayerScored() {
    if (tennisScores[this.scoresIdx[0]] == 40) {
      this.wonBy = 'first';
      return;
    }
    this.scoresIdx[0]++;
  }
  public secondPlayerScored() {
    if (tennisScores[this.scoresIdx[1]] == 40) {
      this.wonBy = 'second';
      return;
    }
    this.scoresIdx[1]++;
  }
}
