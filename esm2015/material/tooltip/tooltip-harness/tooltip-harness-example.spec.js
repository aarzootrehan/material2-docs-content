import { __awaiter } from "tslib";
import { TestBed, waitForAsync } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatTooltipHarness } from '@angular/material/tooltip/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipHarnessExample } from './tooltip-harness-example';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
describe('TooltipHarnessExample', () => {
    let fixture;
    let loader;
    beforeAll(() => {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [MatTooltipModule, NoopAnimationsModule],
            declarations: [TooltipHarnessExample]
        }).compileComponents();
        fixture = TestBed.createComponent(TooltipHarnessExample);
        fixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(fixture);
    }));
    it('should load all tooltip harnesses', () => __awaiter(void 0, void 0, void 0, function* () {
        const tooltips = yield loader.getAllHarnesses(MatTooltipHarness);
        expect(tooltips.length).toBe(2);
    }));
    it('should be able to show a tooltip', () => __awaiter(void 0, void 0, void 0, function* () {
        const tooltip = yield loader.getHarness(MatTooltipHarness.with({ selector: '#one' }));
        expect(yield tooltip.isOpen()).toBe(false);
        yield tooltip.show();
        expect(yield tooltip.isOpen()).toBe(true);
    }));
    it('should be able to hide a tooltip', () => __awaiter(void 0, void 0, void 0, function* () {
        const tooltip = yield loader.getHarness(MatTooltipHarness.with({ selector: '#one' }));
        expect(yield tooltip.isOpen()).toBe(false);
        yield tooltip.show();
        expect(yield tooltip.isOpen()).toBe(true);
        yield tooltip.hide();
        expect(yield tooltip.isOpen()).toBe(false);
    }));
    it('should be able to get the text of a tooltip', () => __awaiter(void 0, void 0, void 0, function* () {
        const tooltip = yield loader.getHarness(MatTooltipHarness.with({ selector: '#one' }));
        yield tooltip.show();
        expect(yield tooltip.getTooltipText()).toBe('Tooltip message');
    }));
    it('should return empty when getting the tooltip text while closed', () => __awaiter(void 0, void 0, void 0, function* () {
        const tooltip = yield loader.getHarness(MatTooltipHarness.with({ selector: '#one' }));
        expect(yield tooltip.getTooltipText()).toBe('');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1oYXJuZXNzL3Rvb2x0aXAtaGFybmVzcy1leGFtcGxlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQW9CLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzlFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRXBFLE9BQU8sRUFBQywyQkFBMkIsRUFBRSw2QkFBNkIsRUFBQyxNQUM1RCwyQ0FBMkMsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUUxRSxRQUFRLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLElBQUksT0FBZ0QsQ0FBQztJQUNyRCxJQUFJLE1BQXFCLENBQUM7SUFFMUIsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQywyQkFBMkIsRUFBRSw2QkFBNkIsRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQyxDQUFDLENBQUM7SUFFSCxVQUFVLENBQ1IsWUFBWSxDQUFDLEdBQUcsRUFBRTtRQUNoQixPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUM7WUFDakQsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDdEMsQ0FBQyxD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bmVudEZpeHR1cmUsIHdhaXRGb3JBc3luY30gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7VGVzdGJlZEhhcm5lc3NFbnZpcm9ubWVudH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcvdGVzdGJlZCc7XG5pbXBvcnQge01hdFRvb2x0aXBIYXJuZXNzfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwL3Rlc3RpbmcnO1xuaW1wb3J0IHtIYXJuZXNzTG9hZGVyfSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZyc7XG5pbXBvcnQge0Jyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSwgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3Rpbmd9XG4gIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nJztcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQge1Rvb2x0aXBIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge05vb3BBbmltYXRpb25zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5kZXNjcmliZSgnVG9vbHRpcEhhcm5lc3NFeGFtcGxlJywgKCkgPT4ge1xuICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxUb29sdGlwSGFybmVzc0V4YW1wbGU+O1xuICBsZXQgbG9hZGVyOiBIYXJuZXNzTG9hZGVyO1xuXG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgVGVzdEJlZC5pbml0VGVzdEVudmlyb25tZW50KEJyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSwgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3RpbmcoKSk7XG4gIH0pO1xuXG4gIGJlZm9yZUVhY2goXG4gICAgd2FpdEZvckFzeW5jKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGltcG9ydHM6IFtNYXRUb29sdGlwTW9kdWxlLCBOb29wQW5pbWF0aW9uc01vZHVsZV0sXG4gICAgICAgIGRlY2xhcmF0aW9uczogW1Rvb2x0aXBIYXJuZXNzRXhhbXBsZV1cbiAgICAgIH0pLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gICAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoVG9vbHRpcEhhcm5lc3NFeGFtcGxlKTtcbiAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgbG9hZGVyID0gVGVzdGJlZEhhcm5lc3NFbnZpcm9ubWVudC5sb2FkZXIoZml4dHVyZSk7XG4gICAgfSlcbiAgKTtcblxuICBpdCgnc2hvdWxkIGxvYWQgYWxsIHRvb2x0aXAgaGFybmVzc2VzJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXBzID0gYXdhaXQgbG9hZGVyLmdldEFsbEhhcm5lc3NlcyhNYXRUb29sdGlwSGFybmVzcyk7XG4gICAgZXhwZWN0KHRvb2x0aXBzLmxlbmd0aCkudG9CZSgyKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIHNob3cgYSB0b29sdGlwJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBhd2FpdCBsb2FkZXIuZ2V0SGFybmVzcyhNYXRUb29sdGlwSGFybmVzcy53aXRoKHtzZWxlY3RvcjogJyNvbmUnfSkpO1xuICAgIGV4cGVjdChhd2FpdCB0b29sdGlwLmlzT3BlbigpKS50b0JlKGZhbHNlKTtcbiAgICBhd2FpdCB0b29sdGlwLnNob3coKTtcbiAgICBleHBlY3QoYXdhaXQgdG9vbHRpcC5pc09wZW4oKSkudG9CZSh0cnVlKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBhYmxlIHRvIGhpZGUgYSB0b29sdGlwJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBhd2FpdCBsb2FkZXIuZ2V0SGFybmVzcyhNYXRUb29sdGlwSGFybmVzcy53aXRoKHtzZWxlY3RvcjogJyNvbmUnfSkpO1xuICAgIGV4cGVjdChhd2FpdCB0b29sdGlwLmlzT3BlbigpKS50b0JlKGZhbHNlKTtcbiAgICBhd2FpdCB0b29sdGlwLnNob3coKTtcbiAgICBleHBlY3QoYXdhaXQgdG9vbHRpcC5pc09wZW4oKSkudG9CZSh0cnVlKTtcbiAgICBhd2FpdCB0b29sdGlwLmhpZGUoKTtcbiAgICBleHBlY3QoYXdhaXQgdG9vbHRpcC5pc09wZW4oKSkudG9CZShmYWxzZSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgYWJsZSB0byBnZXQgdGhlIHRleHQgb2YgYSB0b29sdGlwJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBhd2FpdCBsb2FkZXIuZ2V0SGFybmVzcyhNYXRUb29sdGlwSGFybmVzcy53aXRoKHtzZWxlY3RvcjogJyNvbmUnfSkpO1xuICAgIGF3YWl0IHRvb2x0aXAuc2hvdygpO1xuICAgIGV4cGVjdChhd2FpdCB0b29sdGlwLmdldFRvb2x0aXBUZXh0KCkpLnRvQmUoJ1Rvb2x0aXAgbWVzc2FnZScpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHJldHVybiBlbXB0eSB3aGVuIGdldHRpbmcgdGhlIHRvb2x0aXAgdGV4dCB3aGlsZSBjbG9zZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcCA9IGF3YWl0IGxvYWRlci5nZXRIYXJuZXNzKE1hdFRvb2x0aXBIYXJuZXNzLndpdGgoe3NlbGVjdG9yOiAnI29uZSd9KSk7XG4gICAgZXhwZWN0KGF3YWl0IHRvb2x0aXAuZ2V0VG9vbHRpcFRleHQoKSkudG9CZSgnJyk7XG4gIH0pO1xufSk7XG4iXX0=