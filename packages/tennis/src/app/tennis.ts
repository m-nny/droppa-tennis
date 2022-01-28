const tennisScores = [0, 15, 30, 40, 'advantage', 'win'] as const;
type TennisScores = typeof tennisScores[number];
const getIdxFromTennisScore = (score: TennisScores): number =>
  tennisScores.findIndex((val) => val === score);

const wonBy = ['first', 'second'] as const;
type WonBy = typeof wonBy[number] | null;

class TennisPlayer {
  private scoreIdx = 0;

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

export class TennisGame {
  private player1 = new TennisPlayer();
  private player2 = new TennisPlayer();
  public getWonBy(): WonBy {
    if (this.player1.score === 'win') {
      return 'first';
    }
    if (this.player2.score === 'win') {
      return 'second';
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
