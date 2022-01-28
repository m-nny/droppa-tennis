const tennisScores = [0, 15, 30, 40, 'deuce', 'advantage'] as const;
export type TennisScores = typeof tennisScores[number];
const getIdxFromTennisScore = (score: TennisScores): number =>
  tennisScores.findIndex((val) => val === score);

const wonBy = ['first', 'second'] as const;
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
    this.playerScored(0);
  }
  public secondPlayerScored() {
    this.playerScored(1);
  }
  private playerScored(player: 0 | 1) {
    const other = 1 - player;
    if (
      tennisScores[this.scoresIdx[player]] === 40 &&
      0 <= tennisScores[this.scoresIdx[other]] &&
      tennisScores[this.scoresIdx[other]] <= 30
    ) {
      this.wonBy = wonBy[player];
      return;
    }
    console.log(this.getScore());

    // deuce
    if (
      tennisScores[this.scoresIdx[player]] === 30 &&
      tennisScores[this.scoresIdx[other]] === 40
    ) {
      this.scoresIdx[player] = getIdxFromTennisScore('deuce');
      this.scoresIdx[other] = getIdxFromTennisScore('deuce');
      return;
    }

    if (tennisScores[this.scoresIdx[player]] === 'advantage') {
      this.wonBy = wonBy[player];
      return;
    }
    if (tennisScores[this.scoresIdx[player]] === 'deuce') {
      this.scoresIdx[other] = getIdxFromTennisScore('deuce');
      return;
    }

    this.scoresIdx[player]++;
  }
}
