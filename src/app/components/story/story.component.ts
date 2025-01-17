import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Story } from '../../models/Story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
  story: Story | undefined;
  stories: Story[] = [];

  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService
  ) {}

  ngOnInit(): void {
    const storyId = Number(this.route.snapshot.paramMap.get('id')); // Get the ID from the URL
    this.storyService.getAllStory().subscribe((res: Story[]) => {
      this.stories = res;
      if(this.stories !== null && this.stories.length !== 0) {
        this.story = this.stories.find((story) => story.id === storyId);
      }
    })
    
  }

}
