//
//  Hybrid Native UI v2.0 — SwiftUI Spring Animations
//
//  Springs for spatial (position/scale). Tweens for effects (opacity/color).
//  Card hover: spring. Button: simple ease (hybrid, no spring).
//  Sheet: interruptible spring with drag-to-dismiss.
//

import SwiftUI

// MARK: - Spring Presets (Apple HIG: duration + bounce)

extension Animation {
    /// Snappy spring: response 0.25, damping 0.05
    static let hnSpringSnappy = Animation.spring(response: 0.25, dampingFraction: 0.95, blendDuration: 0)

    /// Default spring: response 0.35, damping 0.10
    static let hnSpringDefault = Animation.spring(response: 0.35, dampingFraction: 0.90, blendDuration: 0)

    /// Bouncy spring: response 0.40, damping 0.20
    static let hnSpringBouncy = Animation.spring(response: 0.40, dampingFraction: 0.80, blendDuration: 0)

    /// Smooth spring: response 0.50, damping 0.00 (critically damped)
    static let hnSpringSmooth = Animation.spring(response: 0.50, dampingFraction: 1.0, blendDuration: 0)

    /// Card hover spring: response 0.35, damping 0.80
    static let hnCardHover = Animation.spring(response: 0.35, dampingFraction: 0.80, blendDuration: 0)

    /// Sheet spring: response 0.35, damping 0.85
    static let hnSheet = Animation.spring(response: 0.35, dampingFraction: 0.85, blendDuration: 0)

    /// Floating pill press spring
    static let hnPillPress = Animation.spring(response: 0.30, dampingFraction: 0.70, blendDuration: 0)

    /// Standard ease (for effects: opacity, color)
    static let hnEaseStandard = Animation.easeInOut(duration: 0.15)

    /// Fast ease (for button press)
    static let hnEaseFast = Animation.easeOut(duration: 0.1)
}

// MARK: - Card Hover (Apple style: spring lift + shadow)

struct HNCardHover: ViewModifier {
    @State private var isHovered = false
    @State private var isPressed = false

    func body(content: Content) -> some View {
        content
            .scaleEffect(isPressed ? 0.98 : (isHovered ? 1.015 : 1.0))
            .offset(y: isHovered ? -3 : 0)
            .shadow(
                color: isHovered ? Color.black.opacity(0.08) : .clear,
                radius: isHovered ? 8 : 0,
                x: 0,
                y: isHovered ? 4 : 0
            )
            .animation(.hnCardHover, value: isHovered)
            .animation(.hnEaseFast, value: isPressed)
            .onHover { hovering in
                isHovered = hovering
                if !hovering { isPressed = false }
            }
            .simultaneousGesture(
                DragGesture(minimumDistance: 0)
                    .onChanged { _ in isPressed = true }
                    .onEnded { _ in isPressed = false }
            )
    }
}

extension View {
    /// Apply Apple-style spring hover: lift + scale + shadow
    func hnCardHover() -> some View {
        modifier(HNCardHover())
    }
}

// MARK: - Button (Hybrid: color + scale, NO spring)

struct HNButtonStyle: ButtonStyle {
    var variant: ButtonVariant = .primary
    var size: ButtonSize = .medium

    enum ButtonVariant {
        case primary
        case secondary
        case ghost
        case ai
        case danger
    }

    enum ButtonSize {
        case small
        case medium
        case large
    }

    private var backgroundColor: Color {
        switch variant {
        case .primary: return Color(red: 0.231, green: 0.510, blue: 0.965)  // #3B82F6
        case .secondary: return .white
        case .ghost: return .clear
        case .ai: return Color(red: 0.063, green: 0.639, blue: 0.498)  // #10A37F
        case .danger: return Color(red: 0.937, green: 0.267, blue: 0.275)  // #EF4444
        }
    }

    private var foregroundColor: Color {
        switch variant {
        case .primary, .ai, .danger: return .white
        case .secondary: return Color(red: 0.110, green: 0.110, blue: 0.118)  // #1C1C1E
        case .ghost: return Color(red: 0.216, green: 0.255, blue: 0.318)  // #374151
        }
    }

    private var height: CGFloat {
        switch size {
        case .small: return 36
        case .medium: return 48
        case .large: return 56
        }
    }

    private var horizontalPadding: CGFloat {
        switch size {
        case .small: return 16
        case .medium: return 20
        case .large: return 24
        }
    }

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.system(size: size == .large ? 16 : 14, weight: .medium))
            .foregroundColor(foregroundColor)
            .frame(height: height)
            .padding(.horizontal, horizontalPadding)
            .background(
                RoundedRectangle(cornerRadius: 9999, style: .continuous)
                    .fill(backgroundColor)
            )
            .overlay(
                RoundedRectangle(cornerRadius: 9999, style: .continuous)
                    .stroke(variant == .secondary ? Color(red: 0.898, green: 0.906, blue: 0.922) : .clear, lineWidth: 1)
            )
            .scaleEffect(configuration.isPressed ? 0.98 : 1.0)
            .animation(.easeOut(duration: 0.1), value: configuration.isPressed)
            .opacity(configuration.isPressed ? 0.9 : 1.0)
    }
}

extension Button {
    /// Apply hybrid button style: pill, color + scale 0.98 on press, NO spring
    func hnButtonStyle(_ variant: HNButtonStyle.ButtonVariant = .primary, size: HNButtonStyle.ButtonSize = .medium) -> some View {
        buttonStyle(HNButtonStyle(variant: variant, size: size))
    }
}

// MARK: - Floating Pill List (Hybrid selection)

struct HNFloatingPillList<Item: Identifiable, Content: View>: View {
    let items: [Item]
    @Binding var selected: Item.ID?
    let content: (Item) -> Content

    var body: some View {
        VStack(spacing: 2) {
            ForEach(items) { item in
                HStack(spacing: 12) {
                    content(item)
                    Spacer()
                }
                .padding(.horizontal, 16)
                .frame(minHeight: 44)
                .background(
                    RoundedRectangle(cornerRadius: 8, style: .continuous)
                        .fill(selected == item.id ? Color.white : Color.clear)
                )
                .shadow(color: selected == item.id ? Color.black.opacity(0.04) : .clear, radius: 2, x: 0, y: 1)
                .scaleEffect(selected == item.id ? 1.0 : 1.0)
                .contentShape(Rectangle())
                .onTapGesture { selected = item.id }
            }
        }
        .padding(4)
        .background(Color(red: 0.969, green: 0.969, blue: 0.976))  // #F7F7F9
        .cornerRadius(10)
    }
}

// MARK: - Switch (Android Material 3)

struct HNSwitch: View {
    @Binding var isOn: Bool
    var onChange: ((Bool) -> Void)?

    var body: some View {
        ZStack(alignment: isOn ? .trailing : .leading) {
            Capsule()
                .fill(isOn ? Color(red: 0.404, green: 0.314, blue: 0.643) : Color(red: 0.878, green: 0.878, blue: 0.878))
                .frame(width: 52, height: 32)
                .animation(.easeInOut(duration: 0.15), value: isOn)

            Circle()
                .fill(isOn ? Color(red: 0.910, green: 0.871, blue: 0.973) : .white)
                .frame(width: 24, height: 24)
                .shadow(color: Color.black.opacity(0.3), radius: 1.5, x: 0, y: 1)
                .padding(.horizontal, 4)
                .offset(x: isOn ? 0 : 0)
                .animation(.easeInOut(duration: 0.25), value: isOn)
        }
        .onTapGesture {
            isOn.toggle()
            onChange?(isOn)
        }
    }
}

// MARK: - Input Field (Android Filled: underline + floating label)

struct HNFilledInput: View {
    let label: String
    @Binding var text: String
    var isError: Bool = false
    var helperText: String? = nil

    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            ZStack(alignment: .leading) {
                Text(label)
                    .font(.system(size: text.isEmpty ? 16 : 12))
                    .foregroundColor(text.isEmpty ? Color(red: 0.475, green: 0.455, blue: 0.494) : (isError ? .red : Color(red: 0.404, green: 0.314, blue: 0.643)))
                    .offset(y: text.isEmpty ? 8 : -8)
                    .animation(.easeInOut(duration: 0.2), value: text.isEmpty)

                TextField("", text: $text)
                    .font(.system(size: 16))
                    .foregroundColor(.primary)
                    .padding(.top, 12)
                    .padding(.bottom, 8)
            }

            Rectangle()
                .fill(isError ? Color.red : (text.isEmpty ? Color(red: 0.475, green: 0.455, blue: 0.494) : Color(red: 0.404, green: 0.314, blue: 0.643)))
                .frame(height: text.isEmpty ? 1 : 2)
                .animation(.easeInOut(duration: 0.2), value: text.isEmpty)

            if let helper = helperText {
                Text(helper)
                    .font(.system(size: 12))
                    .foregroundColor(isError ? .red : Color(red: 0.557, green: 0.557, blue: 0.576))
            }
        }
        .padding(.top, 18)
    }
}

// MARK: - Modal (Hybrid: scale + fade, centered)

struct HNModal<Content: View>: View {
    @Binding var isPresented: Bool
    let content: () -> Content

    var body: some View {
        ZStack {
            if isPresented {
                Color.black.opacity(0.4)
                    .ignoresSafeArea()
                    .transition(.opacity)
                    .onTapGesture { isPresented = false }

                VStack(spacing: 0) {
                    content()
                }
                .background(Color.white)
                .cornerRadius(16)
                .padding(.horizontal, 24)
                .shadow(color: Color.black.opacity(0.1), radius: 24, x: 0, y: 12)
                .transition(.asymmetric(
                    insertion: .scale(scale: 0.95).combined(with: .opacity),
                    removal: .scale(scale: 0.95).combined(with: .opacity)
                ))
            }
        }
        .animation(.easeInOut(duration: 0.25), value: isPresented)
    }
}

// MARK: - Bottom Sheet (Apple: spring + drag-to-dismiss)

struct HNBottomSheet<Content: View>: View {
    @Binding var isPresented: Bool
    let content: () -> Content

    @State private var dragOffset: CGFloat = 0
    @State private var dragVelocity: CGFloat = 0

    var body: some View {
        ZStack(alignment: .bottom) {
            if isPresented {
                Color.black.opacity(0.4 - Double(dragOffset / 1000) * 0.2)
                    .ignoresSafeArea()
                    .transition(.opacity)
                    .onTapGesture { isPresented = false }

                VStack(spacing: 0) {
                    RoundedRectangle(cornerRadius: 999)
                        .fill(Color.black.opacity(0.15))
                        .frame(width: 36, height: 5)
                        .padding(.top, 8)
                        .padding(.bottom, 16)

                    content()
                }
                .frame(maxWidth: .infinity)
                .background(Color.white)
                .cornerRadius(24, corners: [.topLeft, .topRight])
                .offset(y: dragOffset)
                .gesture(
                    DragGesture()
                        .onChanged { value in
                            dragOffset = max(0, value.translation.height)
                            dragVelocity = value.velocity.height
                        }
                        .onEnded { _ in
                            if dragOffset > 100 || dragVelocity > 500 {
                                withAnimation(.hnSheet) {
                                    isPresented = false
                                }
                            } else {
                                withAnimation(.hnSheet) {
                                    dragOffset = 0
                                }
                            }
                        }
                )
                .transition(.move(edge: .bottom))
            }
        }
        .animation(.hnSheet, value: isPresented)
        .onChange(of: isPresented) { newValue in
            if !newValue { dragOffset = 0 }
        }
    }
}

// Helper for corner radius
extension View {
    func cornerRadius(_ radius: CGFloat, corners: UIRectCorner) -> some View {
        clipShape(RoundedCorner(radius: radius, corners: corners))
    }
}

struct RoundedCorner: Shape {
    var radius: CGFloat = .infinity
    var corners: UIRectCorner = .allCorners

    func path(in rect: CGRect) -> Path {
        let path = UIBezierPath(roundedRect: rect, byRoundingCorners: corners, cornerRadii: CGSize(width: radius, height: radius))
        return Path(path.cgPath)
    }
}
