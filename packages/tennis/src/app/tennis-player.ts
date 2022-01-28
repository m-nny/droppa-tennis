const tennisScores = [0, 15, 30, 40, 'advantage', 'win'] as const;
type TennisScores = typeof tennisScores[number];
const getIdxFromTennisScore = (score: TennisScores): number =>
  tennisScores.findIndex((val) => val === score);

export class TennisPlayer {
  private scoreIdx = 0;
  constructor(public name: string) {}

  public get score(): TennisScores {
    return tennisScores[this.scoreIdx];
  }
  public set score(score: TennisScores) {
    this.scoreIdx = getIdxFromTennisScore(score);
  }
  public addScore() {
    return this.scoreIdx++;
  }
}
