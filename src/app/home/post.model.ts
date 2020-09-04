export default class Post {
    public postType: string;
    public postValue: string;
    public commentValue: string;

    public likeCount: number;
    public shareCount: number;
    public commentList: any[];
    public comment: any[];

    public constructor() {
        //Deafult Assumption
        this.postType = 'TEXT';
        this.postValue = '';
        this.commentValue = '';

        this.likeCount = 0;
        this.shareCount = 0;
        this.commentList = [];
        this.comment = [];
    }
}