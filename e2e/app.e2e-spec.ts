import { AngularCourseProjectPage } from './app.po';

describe('angular-course-project App', function() {
  let page: AngularCourseProjectPage;

  beforeEach(() => {
    page = new AngularCourseProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
