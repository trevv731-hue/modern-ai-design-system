import SwiftUI
import UIKit

/// Apple spatial springs + Android-style effects (no bounce on color/opacity).

enum HNSpring {
    static let snappy = Animation.spring(duration: 0.25, bounce: 0)
    static let standard = Animation.spring(duration: 0.35, bounce: 0.05)
    static let bouncy = Animation.spring(duration: 0.4, bounce: 0.18)
    static let smooth = Animation.spring(duration: 0.5, bounce: 0)
    static let effects = Animation.easeInOut(duration: 0.15)
}

struct HNPressableStyle: ButtonStyle {
    var reducedMotion: Bool

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.98 : 1)
            .animation(reducedMotion ? nil : HNSpring.snappy, value: configuration.isPressed)
    }
}

struct HNSheet<Content: View>: View {
    @Binding var isPresented: Bool
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @ViewBuilder var content: () -> Content

    var body: some View {
        ZStack {
            if isPresented {
                Color.black.opacity(0.4)
                    .ignoresSafeArea()
                    .transition(.opacity)
                    .onTapGesture { dismiss() }

                content()
                    .background(.regularMaterial, in: RoundedRectangle(cornerRadius: 24, style: .continuous))
                    .padding(24)
                    .transition(
                        reduceMotion
                            ? .opacity
                            : .scale(scale: 0.96).combined(with: .opacity)
                    )
            }
        }
        .animation(reduceMotion ? HNSpring.effects : HNSpring.standard, value: isPresented)
    }

    private func dismiss() {
        isPresented = false
    }
}

extension View {
    func hnContinuousClip(_ radius: CGFloat) -> some View {
        clipShape(RoundedRectangle(cornerRadius: radius, style: .continuous))
    }

    func hnSpatialAnimation<V: Equatable>(_ value: V) -> some View {
        animation(HNSpring.standard, value: value)
    }

    func hnEffectsAnimation<V: Equatable>(_ value: V) -> some View {
        animation(HNSpring.effects, value: value)
    }
}

enum HNHaptics {
    static func light() {
        UIImpactFeedbackGenerator(style: .light).impactOccurred()
    }
}

#if os(iOS)
@available(iOS 26.0, *)
struct HNGlassToolbar<Content: View>: View {
    @ViewBuilder var content: () -> Content

    var body: some View {
        GlassEffectContainer {
            content()
                .glassEffect(.regular, in: .capsule)
        }
    }
}
#endif

/// UIKit interruptible analog for gesture-driven sheets.
final class HNSpringAnimator {
    let animator: UIViewPropertyAnimator

    init(duration: TimeInterval = 0.35, damping: CGFloat = 0.86) {
        animator = UIViewPropertyAnimator(duration: duration, dampingRatio: damping)
    }

    func add(_ animations: @escaping () -> Void) {
        animator.addAnimations(animations)
    }

    func start() {
        animator.startAnimation()
    }

    func pause() {
        animator.pauseAnimation()
    }

    func fraction(_ value: CGFloat) {
        animator.fractionComplete = value
    }

    func continueForward() {
        animator.isReversed = false
        animator.continueAnimation(withTimingParameters: nil, durationFactor: 1)
    }

    func reverse() {
        animator.isReversed = true
        animator.continueAnimation(withTimingParameters: nil, durationFactor: 1)
    }
}

extension CALayer {
    func hnContinuousCorners(_ radius: CGFloat) {
        cornerRadius = radius
        cornerCurve = .continuous
        masksToBounds = true
    }
}
