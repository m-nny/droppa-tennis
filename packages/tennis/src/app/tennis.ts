const tennisScores = [0, 15, 30, 40, 'advantage', 'win'] as const;
type TennisScores = typeof tennisScores[number];
const getIdxFromTennisScore = (score: TennisScores): number =>
  tennisScores.findIndex((val) => val === score);

class TennisPlayer {
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
export type TennisGameOptions = { firstPlayer: string; secondPlayer: string };
const defaultTennisGameOptions: TennisGameOptions = {
  firstPlayer: 'first',
  secondPlayer: 'second',
};

export class TennisGame {
  private player1;
  private player2;
  public constructor({
    firstPlayer,
    secondPlayer,
  }: TennisGameOptions = defaultTennisGameOptions) {
    this.player1 = new TennisPlayer(firstPlayer);
    this.player2 = new TennisPlayer(secondPlayer);
  }
  public getWonBy(): string | null {
    if (this.player1.score === 'win') {
      return this.player1.name;
    }
    if (this.player2.score === 'win') {
      return this.player2.name;
    }
    return null;
  }
  public isOver(): boolean {
    return this.getWonBy() !== null;
  }
  public getScore(): string {
    return `${this.player1.score}-${this.player2.score}`;
  }
  public firstPlayerScored() {
    this.playerScored(this.player1, this.player2);
  }
  public secondPlayerScored() {
    this.playerScored(this.player2, this.player1);
  }
  private playerScored(scoredPlayer: TennisPlayer, otherPlayer: TennisPlayer) {
    if (
      (scoredPlayer.score === 40 && otherPlayer.score < scoredPlayer.score) ||
      scoredPlayer.score === 'advantage'
    ) {
      scoredPlayer.score = 'win';
      return;
    }
    // deuce
    if (scoredPlayer.score === 30 && otherPlayer.score == 40) {
      scoredPlayer.score = 40;
      otherPlayer.score = 40;
      return;
    }
    // move back to deuce
    if (otherPlayer.score == 'advantage') {
      otherPlayer.score = 40;
      return;
    }
    scoredPlayer.addScore();
  }
}
