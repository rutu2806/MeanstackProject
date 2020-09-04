import { Component, OnInit, HostListener, Inject, ViewEncapsulation } from '@angular/core';
import Post from 'src/app/home/post.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faCoffee, faTv, faSearch, faHome, faUser, faStore, faUsers, faCog, faUserCircle, faUserFriends, faEllipsisH, faShare, faGlobeAsia, faBriefcase, faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBell, faImage, faThumbsUp, faCommentAlt, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { CommentmodalComponent } from '../commentmodal/commentmodal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class HomeComponent {
  title = 'project';
  faCoffee = faCoffee;
  faFacebook = faFacebook;
  faSearch = faSearch;
  faHome = faHome;
  faBell = faBell;
  faTv = faTv;
  faUser = faUser;
  faStore = faStore;
  faUsers = faUsers;
  faFacebookMessenger = faFacebookMessenger;
  faCog = faCog;
  faUserCircle = faUserCircle;
  faImage = faImage;
  faUserFriends = faUserFriends;
  faEllipsisH = faEllipsisH;
  faThumbsUp = faThumbsUp;
  faCommentAlt = faCommentAlt;
  faShare = faShare;
  faGlobeAsia = faGlobeAsia;
  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faMapMarkerAlt = faMapMarkerAlt;
  faHeart = faHeart;

  //Post logic here
  public post: Post;
  public postList: Post[];

  public constructor(private sanitizer: DomSanitizer, private modalService: NgbModal, private router: Router) {
    this.post = new Post();


    this.postList = [];
  }

  //Post Text
  public postText() {
    //used splice help to add element at any postion
    this.postList.splice(0, 0, this.post);

    //making free by re-intilize
    this.post = new Post();
  }

  /** Post Image */
  public postImage(event) {
    console.log('Posting Image...');

    // IT WILL GIVE ACCESS TO INPUT ELEMENT 
    const refElement = event.target;
    const uploadedFile = refElement.files[0];

    const uploadedFileAsUrl = URL.createObjectURL(uploadedFile);
    const uploadedFileAsUrlNew = this.sanitizer.bypassSecurityTrustResourceUrl(uploadedFileAsUrl);

    this.post.postType = 'IMAGE';
    this.post.postValueMedia = uploadedFileAsUrlNew;

    // SPLICE - Using this we can add element to any position.
    this.postList.splice(0, 0, this.post);

    console.log(uploadedFile);

    // RE INITIALZE
    this.post = new Post();
  }

  //video post
  public postVideo(event) {
    console.log('Posting Video...');

    // IT WILL GIVE ACCESS TO INPUT ELEMENT
    const refElement = event.target;
    const uploadedFile = refElement.files[0];

    const uploadedFileAsUrl = URL.createObjectURL(uploadedFile);
    const uploadedFileAsUrlNew = this.sanitizer.bypassSecurityTrustResourceUrl(uploadedFileAsUrl);

    this.post.postType = 'VIDEO';
    this.post.postValueMedia = uploadedFileAsUrlNew;

    // SPLICE - Using this we can add element to any position.
    this.postList.splice(0, 0, this.post);

    // RE INITIALZE
    this.post = new Post();
  }

  //like count
  public likeCount(item: Post) {
    item.likeCount += 1;
  }

  //share count
  public shareCount(item: Post) {
    item.shareCount += 1;
  }

  //comment count
  public addComment(item: Post) {
    item.commentList.push("Thank you");
  }

  //delete post
  public deletePost(itemIndex) {
    this.postList.splice(itemIndex, 1);
  }

  //comment show model
  public showComment() {
    //open modal
    this.modalService.open(CommentmodalComponent);
  }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.removeItem('sid')
    this.router.navigate(['login']);
  }
}