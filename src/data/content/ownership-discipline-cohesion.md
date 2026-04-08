A few months ago I left a role that had burned me out and took a new one. It was supposed to be a stopgap. The team talked a good game in the interviews. The codebase told a different story. No patterns, no standards, no best practices to speak of. Files thousands of lines long, no dependency injection, no interfaces, no tests, static methods everywhere, and a review culture that treated approval as a formality.

What surprised me is how much I care. Nobody was going to raise the bar, so I did.

It's a .NET codebase. I'd never worked in .NET before. That didn't matter as much as I thought it would.

My girlfriend laughed at me a few weeks in. I was venting about the code. Not about the people, not about the process, not about the politics. About the code. She said: "It's funny because you aren't even mad about anything normal. You're almost personally insulted that they are disrespecting software." She wasn't wrong.

I've [written before](/blog/when-managers-fail-developers-six-years-later) about discipline being the difference on high-performing teams. About how autonomy without alignment is just drift. About how someone has to own the complexity so the team doesn't have to. I believed all of that from the manager's chair. What I didn't fully appreciate is what those principles look like from inside a team, without authority, without a mandate, in an environment that isn't asking you to raise the bar.

It turns out they look the same. They're just harder.

### Ownership

A senior engineer submitted a pull request introducing net new code. No dependency injection registration. A service being manually instantiated inside every controller action. A database context passed as a method parameter rather than injected via constructor. These aren't stylistic preferences. They're departures from how the framework was designed to work, with real consequences for testability and maintainability.

I left comments. Specific, sourced comments with links to Microsoft's official documentation. The response was something to the effect of: this is a low frequency call, the runtime savings are minimal, how important is this to you?

I wasn't talking about performance. He also argued that following the pattern would add complexity and maintenance costs. But the change was one line in a configuration file, a constructor, and removing a parameter. The framework has a prescribed pattern for a reason, and net new code with no legacy constraints is the lowest friction moment to follow it.

He fixed it. More than fixed it. He built a reflection-based auto-registration extension that wired up services automatically by convention. The capability was there the whole time. It just needed someone to hold the line long enough for it to show up.

That's ownership. Not over the outcome, but over the standard. You don't get to decide whether the bar exists. You just decide whether you're going to hold it.

### Discipline

Separately, I was handed a feature to build in a legacy class library. No dependency injection container. No interfaces. Static business logic classes with database contexts instantiated inline, per method, everywhere. A runtime tenant dependency resolved from HTTP session that made conventional DI registration impossible at startup.

The easy path was to copy the pattern. Everyone else had.

Instead I spent time really understanding the constraints, not just accepting them, and designed something that worked within them without surrendering to them. Interfaces. A repository layer that contained the database context entirely. A service layer with no knowledge of session or connection strings. A private factory method in the controller as an explicit composition root. A shared helper that centralized context creation and would be the single point of change when proper dependency injection became available.

I wrote unit tests. I documented the pattern in an Architectural Decision Record, the first one in the repository's history.

People sometimes read discipline in a low-standard environment as being difficult. I think it's just refusing to let the environment set your standard for you. The codebase you inherit tells you where things are, not where they have to stay.

### Cohesion

Before I arrived, there were no unit tests in the most widely distributed and important repository at the company, let alone any other project. I set up the testing framework. I showed a junior engineer how to use it. Not just the mechanics, but the thinking behind it. Why you write tests before you find out something is broken. What a well-structured test actually tells you about the code it covers.

Last week he submitted a pull request. His tests caught legitimate bugs in his own code. He refactored the service to fix them before anyone else saw the problem. He also left a substantive review comment on the aforementioned senior engineer's PR, a specific, correct observation about assertion patterns in the test suite.

I didn't ask him to do any of that. He just did it.

That's cohesion. Not a team that was built deliberately or announced in a kickoff meeting. Just two people, working near each other, starting to hold each other to the same standard. It's fragile and informal and still very much in progress. But it's real.

People want to be better. The problem is that inertia is real, especially for people who have been somewhere long enough to stop questioning how things are done. That becomes the culture. Juniors who don't know better assume it's normal. Sometimes it takes one opinionated new person to call things out and own the standard.

I still don't love this job. The market will shift and when it does I'll move on. But I've stopped thinking of this as time to endure.

The testing framework exists now. The ADR exists. The pattern exists. Someone who comes after me will find something to build on instead of nothing. The junior engineer will carry these habits into every team he joins after this one. The senior engineer submitted a PR last week that needed no notes, a genuinely clean, well-structured piece of work. I approved it with two words and a rocket ship.

Maybe the job doesn't have to love you back for the work to matter.

Ownership, discipline, cohesion. You don't need a title to practice any of them. You just need to decide that the standard exists whether or not the environment enforces it, and then hold it, quietly, every day, even when nobody is watching.

Especially then.
