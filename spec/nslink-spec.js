'use babel';

import Nslink from '../lib/nslink';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Nslink', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('nslink');
  });

  describe('when the nslink:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.nslink')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'nslink:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.nslink')).toExist();

        let nslinkElement = workspaceElement.querySelector('.nslink');
        expect(nslinkElement).toExist();

        let nslinkPanel = atom.workspace.panelForItem(nslinkElement);
        expect(nslinkPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'nslink:toggle');
        expect(nslinkPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.nslink')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'nslink:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let nslinkElement = workspaceElement.querySelector('.nslink');
        expect(nslinkElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'nslink:toggle');
        expect(nslinkElement).not.toBeVisible();
      });
    });
  });
});
