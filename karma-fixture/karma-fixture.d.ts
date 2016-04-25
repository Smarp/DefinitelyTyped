// Type definitions for Karma-fixture 1.0.6
// Project: https://github.com/billtrik/karma-fixture
// Definitions by: Zhen Shi <https://github.com/zoeszhen>
// Definitions: https://github.com/Smarp/DefinitelyTyped

interface Fixture {
	error: string;
	el(): void;
	load(files: any): any;
	set(html_strings: string): any;
	cleanup(): void;
	setBase(fixtureBasePath: any): void;
}
declare var fixture: Fixture;